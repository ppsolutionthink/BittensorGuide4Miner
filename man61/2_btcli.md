# btcli
**work at `/workspace`**
## 1. Python3
**python version**
```
python3 --version
```
Output:
```
Python3 3.12.3
```

**python-venv**
``` 
apt install python3.12-venv -y
python3 -m venv venv
source venv/bin/activate
```

> source venv/bin/activate

**pip**
```
apt install python3-pip -y
```

------------

## 2. btcli
**2.1 Install btcli**
``` 
pip install bittensor-cli
```

**Check `btcli` version**
```
btcli --version
```

Output:
```
BTCLI version: 9.7.0
```

**Check All Subnets**
```
$ btcli subnet list
```

**2.2 Create wallet**
```
btcli wallet create
```
- path: 
- name of wallet(coldkey): btwall_1
- name of hotkey: bthotkey_1
- number of words: 12
- **save mnemonic**
- **set password**


```
btcli wallet list
```
Output:
```
Wallets
└── Coldkey btwall_1  ss58_address
    5HdgvS3p...8TNoJ55qRiY2
    └── Hotkey bthotkey_1  ss58_address
        5DctU7UE...xgALFAHj99VW
```

- `hotkey`: is for mining and validation
- `coldkey`: is for everything else

**2.3 Config**
```
btcli config --help
```
(~/.bittensor/config.yml)

Output
```
1. wallet_name
2. wallet_path
3. wallet_hotkey
4. network
5. use_cache
6. rate_tolerance
7. safe_staking
8. allow_partial_stake
9. dashboard_path
```

```
btcli config set
```

```
1
btwall_1

3
bthotkey_1
```

**for testnet** network : 4 -> test

> Default configuration-> Network: finney, wallet: btwall_1, hotkey: bthotkey_1


**2.4 Check wallet**
```
$ btcli wallet balance
```

```
$ btcli wallet overview
```
-------



## 3. Register
```
$ btcli subnet show
```
(NetID: 61)

```
$ btcli subnet register
```








