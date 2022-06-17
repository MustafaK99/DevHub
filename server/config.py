from flask_sqlalchemy import SQLAlchemy


class Config(object): 
    pass 
 
class ProdConfig(Config): 
    pass 
 
class DevConfig(Config):
    debug = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///database.db'