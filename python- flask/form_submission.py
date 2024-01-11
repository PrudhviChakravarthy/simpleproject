from flask import Flask, request, render_template

app = Flask(__name)

@app.route('/submit', methods=['POST', 'GET'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        return f'Hello, {name}!'
    return render_template('form.html')

if __name__ == '__main':
    app.run()
