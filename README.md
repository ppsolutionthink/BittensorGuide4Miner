# BittensorGuide4Miner
Bittensor Guide For Miner

by @ppsolutionthink

### Prerequirements
- python3.10
- python3.10-venv
- python3-pip

``` 
$ alias python=python3
```

``` 
$ python -m venv venv
$ source venv/bin/activate
```

### Install `btcli`
``` 
$ pip install bittensor-cli
```

#### check `btcli` version
```
$ btcli --version
```

#### check `configuration`
```
$ btcli config --help
```
(~/.bittensor/config.yml)

### Create wallet
```
$ btcli wallet create
```

```
$ btcli wallet list
```

```
$ btcli wallet balance
```

```
                                                                     Wallet Coldkey Balance                                                                                   
                                                                          Network: test                                                                                       
                                                                                                                                                                              
    Wallet Name     Coldkey Address                                    Free Balance   Staked Value   Staked (w/slippage)   Total Balance   Total (w/slippage)                 
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                 
    jeipi           5DCUWbfucE2JjnnXRoXUHkv1GuA3nRr6USKRm2FUkLaBysZW       ‎0.0995 τ‎       ‎0.0000 τ‎              ‎0.0000 τ‎        ‎0.0995 τ‎             ‎0.0995 τ‎                 
                                                                                                                                                                              
                                                                                                                                                                              
                                                                                                                                                                              
    Total Balance                                                          ‎0.0995 τ‎       ‎0.0000 τ‎              ‎0.0000 τ‎        ‎0.0995 τ‎             ‎0.0995 τ‎                 
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                 

```
### setup testnet
```
$ btcli config set
```
network : 4 -> test

### some commands
```
$ btcli subnet list
```

```
$ btcli subnet show
```

### registering
```
$ btcli subnet register
```


- `hotkey`: is for mining and validation
- `coldkey`: is for everything else






