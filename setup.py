import io
import os
import re

from setuptools import find_packages, setup

find_version = True
if find_version:
    with io.open("api_logic_server_cli/api_logic_server.py", "rt", encoding="utf8") as f:
        version = re.search(r"__version__ = \"(.*?)\"", f.read()).group(1)
else:
    version = 0.0


def fpath(name):
    return os.path.join(os.path.dirname(__file__), name)


def read(fname):
    return open(fpath(fname)).read()


def desc():
    return read("README.md")


project_urls = {
  'Docs': 'https://valhuber.github.io/ApiLogicServer/'
}

setup(
    name="ApiLogicServer",
    version=version,
    url="https://github.com/valhuber/ApiLogicServer",
    license="BSD",
    author="Val Huber",
    author_email="valjhuber@gmail.com",
    project_urls=project_urls,
    description=(
        "Create JSON:API and Web App from database, with LogicBank -- "
        "40X more concise, Python for extensibility."
    ),
    long_description=desc(),
    long_description_content_type="text/markdown",
    packages=['api_logic_server_cli',
              'api_logic_server_cli.sqlacodegen_wrapper',
              'api_logic_server_cli.sqlacodegen_wrapper.sqlacodegen',
              'api_logic_server_cli.sqlacodegen_wrapper.sqlacodegen.sqlacodegen',
              'api_logic_server_cli.project_prototype',
              'api_logic_server_cli.project_prototype.api',
              'api_logic_server_cli.project_prototype.database',
              'api_logic_server_cli.project_prototype.logic',
              'api_logic_server_cli.project_prototype.test',
              'api_logic_server_cli.project_prototype.templates',
              'api_logic_server_cli.project_prototype.ui',
              'api_logic_server_cli.create_from_model'],
    entry_points={
        "console_scripts": ["ApiLogicServer=api_logic_server_cli.cli:start"]
    },
    include_package_data=True,
    zip_safe=False,
    platforms="any",
    install_requires=[
        "PyJWT==2.6.0",
        "python-dateutil==2.8.2",
        "six==1.16.0",
        "SQLAlchemy==1.4.29",
        "Flask-SQLAlchemy==2.5.1",
        "SQLAlchemy-Utils==0.38.2",
        "Werkzeug==2.2.3",
        "logicbankutils==0.6.0",
        "inflect==5.0.2",
        "itsdangerous==2.1.2",
        "Jinja2==3.1.2",
        "MarkupSafe==2.1.1",
        "safrs>=3.0",
        "Flask-Admin==1.5.7",
        "Flask-Cors==3.0.0",
        "Flask==2.2.2",
        "Flask-JWT-Extended==4.4.4",
        "Flask-Login==0.6.2",
        "Flask-OpenID==1.3.0",
        "python-dotenv==0.15.0",
        "email-validator==1.1.1",
        "LogicBank>=1.08.00",
        "PyMySQL==1.0.2",
#         "pyodbc==4.0.32",
        "cryptography==36.0.1",
        "requests==2.27.1",
        "gunicorn==20.1.0",
        "psycopg2-binary==2.9.5",
        "dotmap==1.3.25",
        "WTForms==2.3.3",
        "behave==1.2.6",
        "alembic==1.7.7",
        "GeoAlchemy2==0.12.5"
    ],
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Web Environment",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: BSD License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.8",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    python_requires=">=3.8, <11",
    setup_requires=['wheel']
)