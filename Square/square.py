from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/square', methods=['POST'])
def square():
    data = request.get_json()
    number = int(data['number'])
    square = number ** 2
    result = {'result': square}
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=8082)
    app.run(debug = True,host = '0.0.0.0')
