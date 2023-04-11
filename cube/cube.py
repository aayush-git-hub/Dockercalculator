from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/cube', methods=['POST'])
def cube():
    data = request.get_json()
    number = int(data['number'])
    result = number ** 3
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(port=8081)
    app.run(debug = True,host = '0.0.0.0')
