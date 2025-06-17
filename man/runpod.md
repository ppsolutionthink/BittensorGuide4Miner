
## RunPod
> Pod Template -> Ubuntu
> Volume Disk 200GB -> Mount Path `/workspace`


```
ssh-keygen -t ed25519 -C "your_email@gmail.com"
```

This will save your public/private key pair to `~/.ssh/id_ed25519.pub` and `~/.ssh/id_ed25519`, respectively.



`~/.ssh/id_ed25519.pub`-> copy -> `settings\SSH Public Keys`

`Pod->Connect\SSH` -> **fetch command**.

**1) -**
Run command to connect to server
```
ssh ti14j3kbjtoped-6441138d@ssh.runpod.io -i ~/.ssh/id_ed25519
```

**2) -**
or
```
ssh root@157.157.221.29 -p 34232 -i ~/.ssh/id_ed25519
```

**3) -**
or use `Web terminal`


> Don't try `Stop`, will loss all data in container
> Todo, try `Lock pod`

----------

### Install Utils
```
sudo apt install mc
```

**work at `/workspace`**



