
# Docker Image
## 1. Install Docker(Ubuntu)
``` bash
# Uninstall old versions:
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done

# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl -y
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
$(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Install docker engine, CLI, containerd, buildx, and compose:
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

``` bash
dockerd --version
```
Output:
``` bash
Docker version 28.2.2, build 45873be
```

**To verify the installation**, run:
``` bash
sudo docker run hello-world
```

**Post-installation steps**
``` bash
# Enable docker service and containerd service to start on boot:
sudo systemctl enable docker.service
sudo systemctl enable containerd.service

# Add docker group:
sudo groupadd docker

# Add your user to the docker group:
sudo usermod -aG docker ${USER}

# Activate the changes to current user session:
newgrp docker
# Or restart your system to apply the changes:
sudo shutdown -r now

# Verify that you can run docker commands without sudo:
docker run hello-world

# Check docker info and version:
docker version
docker info
```


**A Docker Hub Account:**
Sign up at https://hub.docker.com, if you don't already have an account.
Log in to Docker Hub:

**Run the following command to log in to Docker Hub and enter your Docker Hub credentials:**
``` bash
sudo docker login
```

Output:
``` bash
...
Your one-time device confirmation code is: SVTP-HZJD
Press ENTER to open your browser or submit your device code here: https://login.docker.com/activate
...
```

> Press ENTER to open your browser or submit your device code here: https://login.docker.com/activate


----------


## 4. Prepare Solution for Docker Image
> Sample:  `https://github.com/RedTeamSubnet/RedTeam/redteam_core/miner/commits/ab_sniffer_v1`

### 1) `app.py`
Ensure your API server includes the following two routes:

#### `/health` Route
- **Method**: `GET`
- **Response**: Return a JSON object with the following structure:

``` json
{
    "status": "ok"
}
```

#### `/solve` Route
- **Method**: `POST`
- **Input**: Receives a `MinerInput` object. This object represents the challenge sent by the validator.
- **Output**: Returns a `MinerOutput` object. This object contains your response to the challenge.
Both `MinerInput` and `MinerOutput` are defined in: `readteam_core/challenge_pool/<challenge_name>/data_types.py`

Example(in ab_sniffer_v1):
``` python
# -*- coding: utf-8 -*-

import os
import sys
import logging
import pathlib
from typing import Union, List

from fastapi import FastAPI, Body, HTTPException

from data_types import MinerInput, MinerOutput


logger = logging.getLogger(__name__)
logging.basicConfig(
    stream=sys.stdout,
    level=logging.INFO,
    datefmt="%Y-%m-%d %H:%M:%S %z",
    format="[%(asctime)s | %(levelname)s | %(filename)s:%(lineno)d]: %(message)s",
)


app = FastAPI()


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/solve", response_model=MinerOutput)
def solve(miner_input: MinerInput = Body(...)) -> MinerOutput:

    logger.info(f"Retrieving detection.js and related files...")
    _miner_output: MinerOutput
    try:
        _src_dir = pathlib.Path(__file__).parent.resolve()
        _detection_dir = _src_dir / "detection"

        _detection_js_path = str(_detection_dir / "detection.js")
        _detection_js = (
            "function detectDriver() { localStorage.setItem('driver', 'Chrome'); }"
        )
        with open(_detection_js_path, "r") as _detection_js_file:
            _detection_js = _detection_js_file.read()

        # _requirements_txt_path = str(_detection_dir / "requirements.txt")
        # _pip_requirements: Union[List[str], None] = None
        # if os.path.exists(_requirements_txt_path):
        #     with open(_requirements_txt_path, "r") as _requirements_txt_file:
        #         _pip_requirements = [_line.strip() for _line in _requirements_txt_file]

        # _system_deps_path = str(_detection_dir / "system_deps.txt")
        # _system_deps: Union[str, None] = None
        # if os.path.exists(_system_deps_path):
        #     with open(_system_deps_path, "r") as _system_deps_file:
        #         _system_deps = _system_deps_file.read()
        #         if _system_deps:
        #             _system_deps = None

        _miner_output = MinerOutput(
            detection_js=_detection_js,
            # system_deps=_system_deps,
            # pip_requirements=_pip_requirements,
        )
        logger.info(f"Successfully retrieved detection.js and related files.")
    except Exception as err:
        logger.error(f"Failed to retrieve detection.js and related files: {err}")
        raise HTTPException(
            status_code=500, detail="Failed to retrieve detection.js and related files."
        )

    return _miner_output


___all___ = ["app"]
```
### 2) `requirements.txt`
Make sure to include a `requirements.txt` file in the root directory with all necessary dependencies for your project. For example:
```
fastapi
uvicorn
transformers
accelerate
```

Example(in ab_sniffer_v1):
```
fastapi[all]~=0.110.1
```
You can generate a `requirements.txt` file using `pip freeze > requirements.txt` if you have a virtual environment set up.


### 3) `Dockerfile`
Create a `Dockerfile` in the root directory of your project to define the container image. Below is an example template for the `Dockerfile`:
``` bash
# Use a base image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all necessary files into the container
COPY . .

# Expose the port the app runs on (must be 10002)
EXPOSE 10002

# Run the app using the command (adjust accordingly if using Flask or FastAPI)
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "10002"]
```

Example(in ab_sniffer_v1):
``` bash
# syntax=docker/dockerfile:1

FROM python:3.10.16-slim-bullseye

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# Install python dependencies
COPY requirements.txt .
RUN python3 -m pip install --no-cache-dir -r requirements.txt

# Copy application source code
COPY ./src .

EXPOSE 10002

CMD ["/bin/bash", "-c", "uvicorn app:app --host 0.0.0.0 --port 10002"]

```


**Submission structure in ab_sniffer_v1:**
```
.
├── compose.yml
├── Dockerfile
├── README.md
├── requirements.txt
├── scripts
│   └── build.sh
└── src
    ├── app.py
    ├── data_types.py
    └── detection
        └── detection.js

```
## 3. Build and Publish Docker Images
### 1) Build the Docker Image
**Navigate to the directory containing your `Dockerfile`:**
``` bash
cd /path/to/your/project
```
Example:
``` bash
cd redteam_core/miner/commits/ab_sniffer_v1
```
**Build the Docker image:**
``` bash
docker build -t <image_name>:<tag> .
```
- Replace `<image_name>` with the desired name of your image (e.g., `challenge_name`).
- Replace `<tag>` with a version or description for the image (e.g., `v1.0`, `latest`).

Example:
``` bash
sudo docker build -t ab_sniffer_v1:0.0.1 .
```

### 2) Tag the Docker Image
**Tag your image for Docker Hub by adding your Docker Hub username:**
``` bash
docker tag <image_name>:<tag> <dockerhub_username>/<repository_name>:<tag>

```
- Replace `<dockerhub_username>` with your Docker Hub username.
- Replace `<repository_name>` with the repository name you want to push to.

Example:
``` bash
sudo docker tag ab_sniffer_v1:0.0.1 ppsolutionthink/ab_sniffer_v1:0.0.1
```

### 3) Push the Docker Image to Docker Hub
**Push the tagged image to Docker Hub:**
``` bash
docker push <dockerhub_username>/<repository_name>:<tag>
```
Example:

``` bash
sudo docker push ppsolutionthink/ab_sniffer_v1:0.0.1
```

### 4) Retrieve the SHA256 Digest
**After pushing the image, retrieve the digest by running:**
``` bash
docker inspect --format='{{index .RepoDigests 0}}' <dockerhub_username>/<repository_name>:<tag>
```
Example:
``` bash
sudo docker inspect --format='{{index .RepoDigests 0}}' ppsolutionthink/ab_sniffer_v1:0.0.1
```

Output:
``` bash
ppsolutionthink/ab_sniffer_v1@sha256:c0a18beaa141e42823affb32b5b0a439c860302991de81cb44370573de5952fc
```
### 5) Verify the Image on Docker Hub
Log in to Docker Hub and navigate to your repository to ensure the image has been successfully uploaded.

-------
## 4. Setup for miner
### Update `active_commit.yaml`
Go to the `neurons/miner/active_commit.yaml` file and update it with the new image tag:
``` bash
ppsolutionthink/ab_sniffer_v1@sha256:c0a18beaa141e42823affb32b5b0a439c860302991de81cb44370573de5952fc
```

