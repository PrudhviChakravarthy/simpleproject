from flask import Flask, request

app = Flask(__name)

@app.route('/greet')
def greet():
    name = request.args.get('name', 'Guest')
    return f'Hello, {name}!'

if __name__ == '__main':
    app.run()
