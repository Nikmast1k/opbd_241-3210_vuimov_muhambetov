import datetime
import os, re
from functools import partial

def _update_filename(instance, filename, path):

    todays_date = datetime.datetime.now()
    path = f"{path}/{todays_date.year}/{todays_date.month}"
    format = re.search(".\w*$", filename).group()
    filename = todays_date.strftime(f"%Y_%m_%d_%H_%M_%S_%f{format}")

    return os.path.join(path, filename)

def upload_to(path):
    return partial(_update_filename, path=path)