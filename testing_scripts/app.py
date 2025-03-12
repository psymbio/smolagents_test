from smolagents import CodeAgent, DuckDuckGoSearchTool, HfApiModel

model = HfApiModel()
agent = CodeAgent(tools=[DuckDuckGoSearchTool()], model=model, additional_authorized_imports=[
    "selenium",
    "selenium.webdriver.common.keys",
    "selenium.webdriver.common.by",
    "webdriver_manager.chrome",
])

agent.run("Write a selenium test to login and create 5 bookings on https://smolagents-test.vercel.app/ this website, username: admin, password: admin")

"""
You have exceeded your monthly included credits for Inference Providers. Subscribe to PRO to get 20x more monthly
included credits.
[Step 17: Duration 0.30 seconds| Input tokens: 53,107 | Output tokens: 4,313]
"""