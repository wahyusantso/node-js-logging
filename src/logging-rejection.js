import winston from "winston";

async function callAsync() {
    return Promise.reject('Ups error!');
}

//menggunakan winston untuk menangkap Promise Rejection yang belum ter-handle.
winston.createLogger({
    level: "info",
    transports: [ //transport, desitinasi/tujuan log dikirim
        new winston.transports.Console({}),
        new winston.transports.File({ //log akan disimpan di file
            handleExceptions: true,
            handleRejections: true,
            filename: "exception-file.log"
        })
    ]
});

callAsync();