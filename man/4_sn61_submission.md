
# Submission
## Install Docker(Ubuntu)
``` bash
# Uninstall old versions:
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done

# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
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
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```
dockerd --version
```
Output:
```
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
docker login
```
----------

## Build and Publish Docker Images
### 1. Build the Docker Image
**Navigate to the directory containing your `Dockerfile`:**
``` bash
cd /path/to/your/project
```
Example:
``` bash
cd redteam_core/miner/commits/solution1
```
**Build the Docker image:**
``` bash
docker build -t <image_name>:<tag> .
```
- Replace `<image_name>` with the desired name of your image (e.g., `challenge_name`).
- Replace `<tag>` with a version or description for the image (e.g., `v1.0`, `latest`).

Example:
``` bash
docker build -t challenge_name:0.0.1 .
```

### 2. Tag the Docker Image
**Tag your image for Docker Hub by adding your Docker Hub username:**
``` bash
docker tag <image_name>:<tag> <dockerhub_username>/<repository_name>:<tag>

```
- Replace `<dockerhub_username>` with your Docker Hub username.
- Replace `<repository_name>` with the repository name you want to push to.

Example:
``` bash
docker tag challenge_name:0.0.1 redteam/challenge_name:0.0.1
```

### 3. Push the Docker Image to Docker Hub
**Push the tagged image to Docker Hub:**
``` bash
docker push <dockerhub_username>/<repository_name>:<tag>
```
Example:

``` bash
docker push redteam/challenge_name:0.0.1
```

### 4. Retrieve the SHA256 Digest
**After pushing the image, retrieve the digest by running:**
``` bash
docker inspect --format='{{index .RepoDigests 0}}' <dockerhub_username>/<repository_name>:<tag>
```
Example:
``` bash
docker inspect --format='{{index .RepoDigests 0}}' redteam/challenge_name:0.0.1
```

### 5. Verify the Image on Docker Hub
Log in to Docker Hub and navigate to your repository to ensure the image has been successfully uploaded.

