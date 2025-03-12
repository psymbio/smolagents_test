import requests
import json

"""
So I had like an older chromedriver version installed on my system and I was getting the following error when I tried to run my selenium tests:

The chromedriver version (86.0.4240.22) detected in PATH at /usr/bin/chromedriver might not be compatible with the detected chrome version (133.0.6943.141); currently, chromedriver 133.0.6943.141 is recommended for chrome 133.*, so it is advised to delete the driver in PATH and retry

I had to really solve it step wise, here is what I did:

```bash
cd /usr/bin/
ls
sudo rm -rf chromedriver
cd /tmp/
wget -O /tmp/chromedriver.zip https://storage.googleapis.com/chrome-for-testing-public/133.0.6943.141/linux64/chromedriver-linux64.zip
sudo unzip /tmp/chromedriver.zip
cd chromedriver-linux64/
sudo mv chromedriver /usr/bin/
sudo chmod +x /usr/bin/chromedriver
chromedriver --version
```

Would recommend you run these commands succession seeing the outcome and where it fails.
"""

# URL of the JSON file
url = "https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json"

# Fetch the JSON data
response = requests.get(url)
data = response.json()

# Chrome version we are interested in
chrome_version = "133"

# Find the relevant version entry
for entry in data['versions']:
    if entry['version'].startswith(chrome_version):
        # Extract the chromedriver download URL
        for download in entry['downloads']['chromedriver']:
            if download['platform'] == 'linux64':  # Change this to your platform if needed
                chromedriver_url = download['url']
                print(f"ChromeDriver URL for Chrome {chrome_version}: {chromedriver_url}")
                break
        break
else:
    print(f"No ChromeDriver found for Chrome version {chrome_version}")