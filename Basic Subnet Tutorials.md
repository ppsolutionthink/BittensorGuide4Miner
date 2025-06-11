

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
- <spin style="color:red">Start with Bittensor Subnet Template</spin>
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



