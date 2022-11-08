const globals = {
    vue: 'Vue',
    '@antv/g2': 'G2'
}
const path = 'dist/';
const output = [];

if (process.env.NODE_ENV === 'production') {
    ['iife', 'es', 'umd'].forEach((item) => {
        output.push({
            dir: path + item,
            format: item,
            globals,
            name: 'adsionli',
        });
    });
} else {
    output.push({
        dir: path,
        format: 'es',
        globals,
        name: 'adsionli',
        sourcemap: true
    });
}

export default output;