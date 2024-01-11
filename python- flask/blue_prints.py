from flask import Flask, Blueprint, render_template

app = Flask(__name)
admin_bp = Blueprint('admin', __name__)

@app.route('/')
def index():
    return render_template('index.html')

@admin_bp.route('/admin')
def admin():
    return 'Admin Page'

app.register_blueprint(admin_bp, url_prefix='/admin')

if __name__ == '__main':
    app.run()
