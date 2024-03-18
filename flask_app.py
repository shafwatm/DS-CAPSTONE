from flask import Flask, render_template, request, redirect, url_for
import sqlite3
from flask_sqlalchemy import SQLALchemy

sql = sqlite3.connect('C:\Users\wuyul\OneDrive\Desktop\enhanced implementation\crime_data.db', check_same_thread=False)
cursor = sql.cursor()

app = Flask(__name__)
app.config["DEBUG"] = True

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("main_page.html")

    # if someone clicks on the post comment button
    cursor.execute("SELECT * FROM 'crime_data'")
    
    sql.commit()
    
    print(cursor.fetchall())
    
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run()
