from flask import flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('front.html')

@app.route("index.html")
def first():

    return render_template("index.html")