import requests

BASE = "http://127.0.0.1:5000/"

response = requests.get(BASE + "machine")
print("Response from the gangsta: ", response.json())