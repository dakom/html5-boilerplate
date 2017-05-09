import { Mandelbrot } from './mandelbrot/Mandelbrot';

class WorkerInit {
    constructor() {

        let mandelbrot: Mandelbrot;
        
        addEventListener('message', (e: MessageEvent) => {
            if (e.data.cmd == 'init') {
                mandelbrot = new Mandelbrot(e.data.imgData, e.data.width, e.data.height);

                (self as any).postMessage({
                    cmd: 'ready'
                });
            }

            if (e.data.cmd == 'getData') {
                let dataBuf: ArrayBuffer = e.data.dataBuf;

                mandelbrot.crunchData(dataBuf, e.data.iterations);

                //Second property will Transfer the ArrayBuffer rather than copy
                (self as any).postMessage({
                    cmd: 'data',
                    buf: dataBuf
                }, [
                        dataBuf
                    ]);
            }
        });
    }
}

new WorkerInit();


