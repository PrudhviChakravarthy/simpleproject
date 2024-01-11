from flask import Flask

app = Flask(__name)

@app.route('/')
def hello_world():
    return 'Hello, Flask!'

if __name__ == '__main':
    app.run()
