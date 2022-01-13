from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging
# use absolute path import for easier multi-{app,model,db} support
db_spec =importlib.util.spec_from_file_location("database", pathlib.Path(__file__).parent.parent / "database.py")
database = importlib.util.module_from_spec(db_spec)
from database import models


app_logger = logging.getLogger('api_logic_server_app')
app_logger.info("api/expose_api_models.py - endpoint for each table")
