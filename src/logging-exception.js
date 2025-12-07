import winston from "winston";

//menggunakan winston untuk menangkap exception yang belum atau tidak ter-handle.
winston.createLogger({
    level: "info",
    transports: [ //transport, desitinasi/tujuan log dikirim
        new winston.transports.Console({}),
        new winston.transports.File({ //log akan disimpan di file
            handleExceptions: true,
            filename: "exception-file.log"
        })
    ]
});

hello(); //ini akan memicu error karena belum didefinisikan.