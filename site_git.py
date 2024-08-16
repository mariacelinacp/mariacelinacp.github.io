from flask import Flask, render_template


app = Flask(__name__)

# Criando da 1° paǵina do site

@app.route("/")
def homepage():
    return render_template("homepage.html")

# Colocando o site no ar
if __name__ == "__main__":
    app.run(debug=True)