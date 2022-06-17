from main import app, db, User

@app.shell_context_processor
def make_shell__context():
    return dict(app=app, db=db, User=User)