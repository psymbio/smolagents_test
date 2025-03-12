# smolagents_test
This is a small repo testing the capabilities of the smolagents on a bookings website.

## Clone the repo
```bash
git clone git@github.com:psymbio/smolagents_test.git
```

## Editing the Bookings Website
```bash
cd bookings_website
npm i
npm run dev
```

## Running the Automated Testing
```bash
cd testing_scripts
python3 -m venv env
source env/bin/activate
pip3 install -r requirements.txt
python3 app.py
```

## Chromedriver Installation
```bash
cd testing_scripts
python3 chromdriver_finder.py
```