from smolagents import CodeAgent, LiteLLMModel, DuckDuckGoSearchTool

model = LiteLLMModel(
    model_id="ollama_chat/deepseek-r1:7b",
    api_base="http://127.0.0.1:11434",
    num_ctx=8192,
)

agent = CodeAgent(tools=[DuckDuckGoSearchTool()], model=model, additional_authorized_imports=[
    "selenium",
    "selenium.webdriver.common.keys",
    "selenium.webdriver.common.by",
    "webdriver_manager.chrome",
])

agent.run("Write a selenium test to login and create 5 bookings on https://smolagents-test.vercel.app/ this website, username: admin, password: admin")