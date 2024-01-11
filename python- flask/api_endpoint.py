from flask import Flask, jsonify

app = Flask(__name)

@app.route('/api/data')
def get_data():
    data = {'value': 42}
    return jsonify(data)

if __name__ == '__main':
    app.run()
