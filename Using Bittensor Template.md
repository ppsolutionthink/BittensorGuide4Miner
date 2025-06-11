

### 1. Install `Bittensor`
(optional)
``` 
python3 -m venv bt_venv
source bt_venv/bin/activate
```

```
pip install bittensor
```

**Verify**
``` python
import bittensor as bt
print( bt.__version__ )
```
Output
```
9.7.0

```

``` python
import bittensor as bt
metagraph = bt.Metagraph(1)
print(metagraph.axons[:10])
```

Output
```
[AxonInfo( /ipv4/3.139.80.241:11055, 5GqDsK6SAPyQtG243hbaKTsoeumjQQLhUu8GyrXikPTmxjn7, 5D7u5BTqF3j1XHnizp9oR67GFRr8fBEFhbdnuVQEx91vpfB5, 600 ), ...]

```

### 2. Install your subnet template
- **Start with Bittensor Subnet Template**
https://github.com/opentensor/bittensor-subnet-template

- **NOTE: Skip this step** if you already did this during local testing and development.
```
git clone https://github.com/opentensor/bittensor-subnet-template.git 
```

```
cd bittensor-subnet-template
```

Install the Bittensor subnet template package:
```
python -m pip install -e . # Install your subnet template package
```

### 3. Run subnet miner and subnet validator
**Run the subnet miner:**

[./neurons/miner.py](./neurons/miner.py)
```
python neurons/miner.py --netuid 1  --wallet.name miner --wallet.hotkey default --logging.debug
```

Output:
```
>> 2023-08-08 16:58:11.223 |       INFO       | Running miner for subnet: 1 on network: wss://entrypoint-finney.opentensor.ai:443 with config: ...
```

**Run the subnet validator:**

[./neurons/validator.py](./neurons/validator.py)
```
python neurons/validator.py --netuid 1  --wallet.name validator --wallet.hotkey default --logging.debug
```

Output:
```
>> 2023-08-08 16:58:11.223 |       INFO       | Running validator for subnet: 1 on network: wss://entrypoint-finney.opentensor.ai:443 with config: ...
```

