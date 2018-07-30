const vbsDecode = require('./decode.js');
// testVbsKeyVal()
// function testVbsKeyVal() {
//     let arr = [2,2,217,64,1,2,204,64,1,1]
//     // let arr = [2,2,217,64,1,2,217,64,1,2,2,217,64,1,2,204,64,1,1,1];
//     // let arr = [2,2,206,64,2,218,64,207,64,1,1,2,163,187,182,64,2,223,189,183,64,131,246,166,165,64,1,1,1];
//     // let arr = [2,143,189,64,208,197,64,2,252,70,137,74,1,218,64,2,150,210,227,241,93,237,65,2,183,70,1,87,191,252,212,65,163,187,182,64,1,2,210,228,228,65,244,213,160,68,1,255,70,219,197,64,208,64,1];
//     // let arr = [2,206,64,2,66,73,1,218,64,2,217,64,1,1];//[78,[2,9],90,[89]]
//     // let arr = [2,2,206,64,2,218,64,207,64,1,1,2,163,187,182,64,2,223,189,183,64,131,246,166,165,64,1,1,1]; //[[78,[90,79]],[892323,[909023,78232323]]]
//     // let arr = [2,143,189,64,208,197,64,2,252,70,137,74,1,218,64,237,65,2,183,70,1,87,2,191,252,212,65,163,187,182,64,163,187,182,64,1,2,210,228,228,65,244,213,160,68,1,255,70,219,197,64,208,64,1];
//     // let arr = [2,217,64,2,217,64,204,64,1,217,64,2,204,64,1,1]
//     // let arr = [2,2,65,1,2,66,1,67,1];
//     // let arr = [3,33,97,35,107,101,121,34,106,115,34,50,51,35,100,106,100,36,100,115,100,104,1];
//     // let arr = [2,143,189,64,208,197,64,2,252,70,137,74,1,218,64,237,65,2,183,70,1,87,2,191,252,212,65,163,187,182,64,163,187,182,64,1,2,210,228,228,65,244,213,160,68,1,255,70,219,197,64,208,64,1];
//     // let arr = [2,143,189,64,208,197,64,2,252,70,137,74,1,235,203,152,186,225,157,200,130,30,70,237,65,2,183,70,1,87,2,191,252,212,65,163,187,182,64,163,187,182,64,1,2,210,228,228,65,244,213,160,68,1,255,70,219,197,64,208,64,1];
//     // let arr = [2,235,203,152,186,225,157,200,130,30,70,1]; // [ 92389238293232320 ]
//     // let arr = [2,143,133,215,199,151,230,231,136,30,125,215,148,132,228,133,210,140,136,30,167,96,179,230,204,153,179,230,196,132,30,168,96,1];
//     // let arr = [2,163,187,182,64,1];   //[892323]
//     // let arr = [2,215,199,194,235,227,203,163,139,30,164,96,169,184,189,148,220,158,190,129,30,173,96,173,228,246,252,254,228,189,134,30,170,96,177,211,149,133,129,185,193,140,30,179,96,179,230,204,153,179,230,196,132,30,168,96,1]; // [92389.89, 23.78,829.789,3.127823,2323.20]
//     // let arr = [2,38,115,104,100,106,115,100,1];
//     // let arr = [2,38,119,101,104,106,119,101,40,115,100,106,104,100,115,102,100,40,100,102,98,106,100,102,100,102,42,100,102,100,117,102,100,113,119,113,119,52,115,100,119,117,101,98,117,119,101,101,103,117,101,121,103,102,117,114,119,114,1]; // ["wehjwe","sdjhdsfd","dfbjdfdf","dfdufdqwqw","sdwuebuweegueygfurwr"]
//     // let arr = [2,163,187,182,64,38,119,101,104,106,119,101,40,115,100,106,104,100,115,102,100,40,100,102,98,106,100,102,100,102,42,100,102,100,117,102,100,113,119,113,119,52,115,100,119,117,101,98,117,119,101,101,103,117,101,121,103,102,117,114,119,114,43,115,100,104,104,104,104,104,104,117,101,114,38,51,55,52,56,50,51,163,187,182,64,2,38,115,104,100,106,115,100,1,89,78,65,1]; // ["wehjwe","sdjhdsfd","dfbjdfdf","dfdufdqwqw","sdwuebuweegueygfurwr","sdhhhhhhuer","374823"]
//     // let arr = [2,131,27,15,68,12,1];
//     // let arr = [2,38,115,104,100,106,115,100,1];
//     // let arr = [2,72,131,27,15,68,12,195,64,2,167,65,217,64,1,36,115,100,104,106,217,64,37,104,100,102,100,102,131,27,190,68,12,1];
//     // let arr = [2,72,131,27,15,68,12,195,64,2,167,65,169,184,189,148,220,158,206,133,30,173,96,169,184,189,148,220,222,178,129,30,171,96,217,64,1,36,115,100,104,106,217,64,37,104,100,102,100,102,131,27,190,68,12,1];
//     // let arr = [2,72,131,27,15,68,12,195,64,2,167,65,169,184,189,148,220,158,206,133,30,173,96,169,184,189,148,220,222,178,129,30,171,96,132,27,89,85,161,89,217,64,1,36,115,100,104,106,217,64,37,104,100,102,100,102,131,27,190,68,12,1];  // [8, new Uint8Array([15,68,12]),67,[167,89.78,89.37,new Uint8Array([89,2389,3489,89.8]),89],"sdhj",89,"hdfdf",new Uint8Array([190,68,12])]
//     // let arr = [3,33,97,35,107,101,121,34,106,115,34,50,51,35,100,106,100,36,100,115,100,104,1]; // {"a": "key","js":'23',"djd":"dsdh"};
//     // let arr = [3,33,97,36,100,102,100,102,1];   // {"a": "dfdf"}
//     // let arr = [3,33,97,35,107,101,121,34,106,115,34,50,51,35,100,106,100,36,100,115,100,104,1]; // {"a": "key","js":'23',"djd":"dsdh"}
//     // let arr = [3,34,50,51,38,100,102,104,106,100,102,34,56,57,35,107,101,121,35,115,104,106,35,100,102,110,1]; // {89:"key","shj":"dfn","23":"dfhjdf"}
//     // let arr = [3,34,100,102,3,34,115,100,35,100,115,102,1,33,115,3,33,107,35,101,100,102,33,108,35,100,100,102,34,115,100,210,73,35,115,100,102,36,100,102,106,107,1,35,100,102,106,36,100,102,106,107,38,115,106,100,107,115,100,34,100,102,1]; // { df: { sd: 'dsf' },s: { k: 'edf', l: 'ddf', sd: 1234, sdf: 'dfjk' },dfj: 'dfjk',sjdksd: 'df' } 
//     // let arr = [202,223,165,182,226,86];  // 782334783434
//     // let arr = [251,238,30,129,64]; // 28406
//     // let arr = [135,173,228,246,252,202,166,143,30,168,96]; // 7834.343
//     // let arr = [2,2,76,162,64,206,64,38,115,116,114,105,110,103,15,40,117,110,100,101,102,105,101,100,1,251,238,30,129,64,1]; // [ 12, 34, 78, 'string', null, 'undefied' ]
//     // let arr = [2,135,173,228,246,252,202,166,143,30,168,96,72,131,27,15,68,12,169,184,189,148,220,158,190,136,30,174,96,37,115,100,115,97,102,2,167,65,169,184,189,148,220,158,206,133,30,173,96,169,184,189,148,220,222,178,129,30,171,96,132,27,89,85,161,89,217,64,1,36,115,100,104,106,217,64,37,104,100,102,100,102,131,27,190,68,12,1]; // [8, new Uint8Array([15,68,12]),67.89,"sdsaf",[167,89.78,89.37,new Uint8Array([89,2389,3489,89.8]),89],"sdhj",89,"hdfdf",new Uint8Array([190,68,12])]
//     // [12,34,78,"string", null, 'undefied']
//     // let arr = [2,76,162,64,206,64,38,115,116,114,105,110,103,15,40,117,110,100,101,102,105,101,100,1]; 
//     // let byteArr = new ArrayBuffer(arr.length);
//     // let vbsCode = new DataView(byteArr);
//     // for(let i = 0; i < arr.length; i++) {
//     //   vbsCode.setUint8(i, arr[i]);
//     // }
//     let x = new Uint8Array(arr);
//     let sa = vbsDecode.decodeVBS(x.buffer,0);
//     console.log(111, sa)
//     // let ss = vbsDecode.decodeVBS(byteArr,4);
//     // console.log(222, ss)
//     // let uu = vbsDecode.decodeVBS(byteArr,6);
//     // console.log(333, uu)
//     // let aa = vbsDecode.decodeVBS(byteArr,13);
//     // console.log(444, aa)
//     // let bb = vbsDecode.decodeVBS(byteArr,14);
//     // console.log(555, bb)
//     // let cc = vbsDecode.decodeVBS(byteArr,23);
//     // console.log(666, cc)

// }
// testVbsKeyVal()
// function testVbsKeyVal() {
//     // let arr = [2,72,131,27,15,68,12,169,184,189,148,220,158,190,136,30,174,96,37,115,100,115,97,102,2,167,65,169,184,189,148,220,158,206,133,30,173,96,169,184,189,148,220,222,178,129,30,171,96,132,27,89,85,161,89,217,64,1,36,115,100,104,106,217,64,37,104,100,102,100,102,131,27,190,68,12,1];
//      // let arr = [3,33,97,35,107,101,121,34,106,115,34,50,51,35,100,106,100,36,100,115,100,104,1]; // {"a": "key","js":'23',"djd":"dsdh"}
//     // let arr = [2,76,162,64,206,64,38,115,116,114,105,110,103,15,40,117,110,100,101,102,105,101,100,1]; 
//     // let arr = [231,153,162,233,222,228,159,129,30,167,96]; // 1278.2963
//     // let arr = [2,231,153,162,233,222,228,159,129,30,167,96,162,64,1]; // [1278.2963]
//     // let arr = [2,1,2,64,1,2,1]
//     // let arr = [3,34,115,100,34,104,106,1,231,153,162,233,222,228,159,129,30,167,96]; // 1278.2963
//     // let arr = [162,64,2,15,1,164,64];
//     // let arr = [2,143,189,64,208,197,64,2,252,70,137,74,1,218,64,237,65,2,183,70,1,87,2,191,252,212,65,163,187,182,64,163,187,182,64,1,2,210,228,228,65,244,213,160,68,1,255,70,219,197,64,208,64,1];
//     // let arr = [131,27,15,68,12]; // new Uint8Array([15,68,12])
//     // let arr = [132,27,15,68,12,68];
//     // let arr = [2,36,119,104,121,104,1];
//     // let arr = [2,38,119,101,104,106,119,101,40,115,100,106,104,100,115,102,100,40,100,102,98,106,100,102,100,102,42,100,102,100,117,102,100,113,119,113,119,52,115,100,119,117,101,98,117,119,101,101,103,117,101,121,103,102,117,114,119,114,43,115,100,104,104,104,104,104,104,117,101,114,38,51,55,52,56,50,51,1];
//     // let arr = [2,132,27,15,68,12,68,217,64,195,64,38,100,115,104,102,106,102,131,27,92,12,68,1]; // [new Uint8Array([15,68,12,68]),89,67,"dshfjf",new Uint8Array([92,12,68])]
//     // let arr = [2,131,27,92,12,68,1];
//     // let arr = [38,228,184,173,229,155,189]; // 中国
//     let arr = [2,38,228,184,173,229,155,189,38,230,151,165,230,156,172,41,228,191,132,231,189,151,230,150,175,38,231,190,142,229,155,189,1];
//     // let arr = [3,33,97,251,64,34,100,107,200,67,1,2,1]; // { a: 123, dk: 456 }
//     // let arr = [3,1];
//     // let arr = [2,1];
//     // let arr = "3 37 104 101 108 108 111 65 37 119 111 114 108 100 67 37 102 97 105 110 116 97 1";
//     // let arr = [2,128,27,1]; // [ Uint8Array [  ] ]
//     let byteArr = new ArrayBuffer(arr.length);
//     let vbsCode = new DataView(byteArr);
//     for(let i = 0; i < arr.length; i++) {
//       vbsCode.setUint8(i, arr[i]);
//     }
//     // let sa = vbsDecode.decodeVBS(byteArr);
//     // console.log(111, sa)
//     let ss = vbsDecode.decodeVBS(byteArr,0);
//     console.log(222, ss)
    
    
//     // let uu = vbsDecode.decodeVBS(byteArr,ss.endPosition);
//     // console.log(333, uu)
//     // let aa = vbsDecode.decodeVBS(byteArr,13);
//     // console.log(444, aa)
//     // let bb = vbsDecode.decodeVBS(byteArr,14);
//     // console.log(555, bb)
//     // let cc = vbsDecode.decodeVBS(byteArr,23);
//     // console.log(666, cc)

// }


// go Test
testVbsKeyVal()
function testVbsKeyVal() {
    // let arr = [2,72,131,27,15,68,12,169,184,189,148,220,158,190,136,30,174,96,37,115,100,115,97,102,2,167,65,169,184,189,148,220,158,206,133,30,173,96,169,184,189,148,220,222,178,129,30,171,96,132,27,89,85,161,89,217,64,1,36,115,100,104,106,217,64,37,104,100,102,100,102,131,27,190,68,12,1];
     // let arr = [3,33,97,35,107,101,121,34,106,115,34,50,51,35,100,106,100,36,100,115,100,104,1]; // {"a": "key","js":'23',"djd":"dsdh"}
    // let arr = [2,76,162,64,206,64,38,115,116,114,105,110,103,15,40,117,110,100,101,102,105,101,100,1]; 
    // let arr = [231,153,162,233,222,228,159,129,30,167,96,189,64]; // 1278.2963
    // let arr = [2,231,153,162,233,222,228,159,129,30,167,96,162,64,1]; // [1278.2963,34]
    // let arr = [2,1,2,64,1,2,1]
    // let arr = [3,34,115,100,34,104,106,1,231,153,162,233,222,228,159,129,30,167,96]; // { sd: 'hj' }
    // let arr = [162,64,2,15,1,164,64];
    // let arr = [2,143,189,64,208,197,64,2,252,70,137,74,1,218,64,237,65,2,183,70,1,87,2,191,252,212,65,163,187,182,64,163,187,182,64,1,2,210,228,228,65,244,213,160,68,1,255,70,219,197,64,208,64,1];
    // let arr = [131,27,15,68,12]; // new Uint8Array([15,68,12])
    // let arr = [132,27,15,68,12,68];
    // let arr = [2,36,119,104,121,104,1];
    // let arr = [2,38,119,101,104,106,119,101,40,115,100,106,104,100,115,102,100,40,100,102,98,106,100,102,100,102,42,100,102,100,117,102,100,113,119,113,119,52,115,100,119,117,101,98,117,119,101,101,103,117,101,121,103,102,117,114,119,114,43,115,100,104,104,104,104,104,104,117,101,114,38,51,55,52,56,50,51,1];
    // let arr = [2,132,27,15,68,12,68,217,64,195,64,38,100,115,104,102,106,102,131,27,92,12,68,1]; // [new Uint8Array([15,68,12,68]),89,67,"dshfjf",new Uint8Array([92,12,68])]
    // let arr = [2,131,27,92,12,68,1];
    // let arr = [38,228,184,173,229,155,189]; // 中国
    // let arr = [2,38,228,184,173,229,155,189,38,230,151,165,230,156,172,41,228,191,132,231,189,151,230,150,175,38,231,190,142,229,155,189,1];
    // let arr = [3,33,97,251,64,34,100,107,200,67,1,2,1]; // { a: 123, dk: 456 }
    // let arr = [3,1];
    // let arr = [2,1];
    // let arr = [135,173,228,246,252,202,166,143,30,168,96]; // 7834.343
    // let str = "[134 27 97 98 99 100 0 0]";
    // let str = "[3 37 104 101 108 108 111 65 37 119 111 114 108 100 67 37 102 97 105 110 116 97 1]";
    // let str = "[3 33 97 251 64 34 100 107 200 67 1]"
    // let str = "[3 36 69 99 104 111 135 27 1 2 3 4 5 6 7 39 70 111 120 116 114 111 116 205 153 179 230 204 153 179 132 31 179 96 36 71 111 108 102 132 27 97 98 99 100 37 97 108 112 104 97 210 133 216 204 68 39 99 104 97 114 108 105 101 44 104 101 108 108 111 44 119 111 114 108 100 33 33 100 50 228 189 160 229 165 189 239 188 140 228 184 150 231 149 140 239 188 129 1]";
    // let str = "[3 65 210 133 216 204 68 67 44 104 101 108 108 111 44 119 111 114 108 100 33 68 50 228 189 160 229 165 189 239 188 140 228 184 150 231 149 140 239 188 129 69 135 27 1 2 3 4 5 6 7 70 205 153 179 230 204 153 179 132 31 179 96 71 132 27 97 98 99 100 1]";
    // let str = "[2 154 69 37 104 101 108 108 111 37 119 111 114 108 100 171 142 218 200 237 249 253 143 30 181 96 1]"; // [666 hello world 0.999]
    // let str = "[3 37 104 101 108 108 111 133 30 98 37 119 111 114 108 100 34 111 107 37 102 97 105 110 116 149 154 239 186 64 1]" // { hello: 1.25, world: 'ok', faint: 123456789 }
    // let str = "[2 65 66 67 1]";
    // let str = "[3 69 37 119 111 114 108 100 98 37 102 97 105 110 116 65 37 104 101 108 108 111 1]";
    // let str = "[2 2 205 153 179 230 204 153 179 134 30 183 96 205 153 179 230 204 153 179 134 30 182 96 179 230 204 153 179 230 204 137 30 182 96 1 2 205 153 179 230 204 153 179 134 30 181 96 129 30 97 179 230 204 153 179 230 204 137 30 181 96 1 2 179 230 204 153 179 230 204 133 30 180 96 205 153 179 230 204 153 179 134 30 180 96 205 153 179 230 204 153 179 142 30 181 96 1 1]";
    // let str = "[2 1]";
    // let str = "[134 27 89 89 76 0 0 0]"; // Uint8Array [ 89, 89, 76, 0, 0, 0 ]
    // let str = "[2 205 153 179 230 204 153 179 134 30 183 96 205 153 179 230 204 153 179 134 30 182 96 179 230 204 153 179 230 204 137 30 182 96 1]";
    // let str = "[3 33 97 35 107 101 121 34 106 115 34 50 51 35 100 106 100 36 100 115 100 104 1]"
    // let str = "[2 128 128 128 128 128 128 128 128 68 1]"; // 288230376151711744   2**58
    // let str = "[133 128 128 128 128 128 128 128 168 64]"; // 2882303761517117445
    let str = "[245 182 246 162 192 238 128 132 30 76]";
    // let str = "[129 30 255 71]"; // Math.pow(2,1023)
    // let str = "[30 66]"; // Infinity
    // let str = "[30 98]"; // -Infinity
    // let str = "[231 204 153 179 230 204 153 179 64]" //28823037615171175 js 28823037615171176
    // let str = "[229 204 153 179 230 204 153 179 64]"; // 28823037615171173 js 28823037615171172
    // let str = "[129 30 255 71]"; // 
    // let str = "[30 64]"; // 0
    // let str = "[30 67]";
    // let str = "[129 30 191 64]";
    // let str = "[245 182 246 162 192 238 128 132 30 76]";
    // let str = "[229 204 153 179 230 204 153 179 64]"; 
    // let str = "[159 190 163 164 135 187 151 135 30 183 96]";
    // let str = "[225 170 181 170 237 165 254 143 30 174 96]"; // 127.8934834723673
    str = str.substring(1,str.length-1);
    let arr = str.split(" ");
    let byteArr = new ArrayBuffer(arr.length);
    let vbsCode = new DataView(byteArr);
    for(let i = 0; i < arr.length; i++) {
      vbsCode.setUint8(i, arr[i]);
    }
    // let sa = vbsDecode.decodeVBS(byteArr);
    
    let ss = vbsDecode.decodeVBS(byteArr,0);
    console.log(222, ss)
    

}
