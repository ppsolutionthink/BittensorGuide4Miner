
# 1. RunPod (Ignore for now)
> Pod Template -> Ubuntu
rehabc/pytorch2.0.0-python3.10-cuda11.6-jupyter-jp
100 GB Disk
100 GB Pod Volume
Volume Path: /workspace

```
wget https://github.com/runpod/runpodctl/releases/latest/download/runpodctl-windows-amd64.exe -O runpodctl.exe
```

create folder `C:\runpodctl`
copy to `C:\runpodctl`
register into PATH `C:\runpodctl`


https://docs.runpod.io/runpodctl/projects/overview
https://docs.runpod.io/runpodctl/install-runpodctl#linux

```
ssh-keygen -t ed25519 -C "superdevpp@gmail.com"
```

This will save your public/private key pair to `~/.ssh/id_ed25519.pub` and `~/.ssh/id_ed25519`, respectively.



`~/.ssh/id_ed25519.pub`-> copy -> `settings\SSH Public Keys`

`Pod->Connect\SSH` -> **fetch command**.

**1) -**
Run command to connect to server
```
(example) ssh ti14j3kbjtoped-6441138d@ssh.runpod.io -i ~/.ssh/id_ed25519
```

**2) -**
or
```
(example) ssh root@157.157.221.29 -p 34232 -i ~/.ssh/id_ed25519
```

**3) -**
or use `Web terminal`


> Don't try `Stop`, will loss all data in container
> Todo, try `Lock pod`

----------
# 2. Install Utils
```
apt update
```
**mc**
```
apt install mc -y
```

**Python3 version**
```
python3 --version
```
Output:
```
Python 3.12.3
```

**git**
```
apt install git -y
```

----------




