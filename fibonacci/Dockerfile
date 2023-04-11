FROM python:3.9

RUN pip install --no-cache-dir Flask Flask-Cors

COPY fibnac.py app.py

EXPOSE 8083

CMD [ "python", "app.py" ]