'use strict';
module.exports =  {
    'timeout': 5000,
    'slow': 700,
    'color': true,
    'reporter': 'mocha-jenkins-reporter',
    'bail': true,
    'reporter-option': [
        'junit_report_path=./report.xml',
        'junit_report_stack=1',
        'junit_report_name=ChatBot Integration API Tests'
    ]
}