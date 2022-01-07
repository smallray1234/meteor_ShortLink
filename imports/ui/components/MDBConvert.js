import React, { useState } from 'react';

import MDBReader from 'mdb-reader';
import { Buffer } from 'buffer';

const MDBConvert = () => {
    const [columnNames, setColumnNames] = useState([]);
    const [mdbData, setmdbData] = useState([]);

    function handleUploadMDB(e) {
        let file = e.currentTarget.files[0];
        console.log('file', file);

        let reader = new FileReader();
        reader.onload = (e) => handleBuffer(e.target.result);
        reader.readAsArrayBuffer(file);
    }
    function handleBuffer(buffer) {
        const reader = new MDBReader(Buffer.from(buffer));

        const tableName = reader.getTableNames(); //['BTZ', 'Kalib', 'Protokoll']
        const table = reader.getTable('Protokoll');
        setColumnNames(table.getColumnNames()); //['ID', 'CNCNr', 'Baureihe', 'Fehlercode', 'Start', 'Ende', 'DauerReal', 'Dateiname', 'Material', 'Blank', 'Höhe', 'DauerCalc', 'LastKalib', 'LastWWKalib', 'ToolsLens', 'Version', 'SGNr']
        setmdbData(table.getData()); // [{id: 1, CNCNr: 29531 ...}, {…}, {…}, …]
        console.log('arr', table.getData());
    }

    function handleUploadTxt(e) {
        const fileList = e.target.files;
        console.log('files:', fileList);
        let fileContent = '';

        let reader = new FileReader();
        reader.onload = () => {
            fileContent = reader.result;
            let searchString = '.stl';

            fileContent.includes(searchString); // ES6: includes
            fileContent.indexOf(searchString) > -1; // indexOf

            let re1 = /STL=z:.\w+.\w+.\w+.\w+.\w+/gm;
            let re2 = /.\w+.\w+.\w+.stl/gm;
            let reLN = /LN=.\w+/gm;
            let reBM = /BM=[a-zA-Z0-9\.\/_()-]+\s\d+/g;

            console.log('test1', fileContent.match(re1));
            console.log('test2', fileContent.match(re2));
            console.log('testLN', fileContent.match(reLN));
            console.log('testBM', fileContent.match(reBM));
            // console.log('fileContent', fileContent);
        };
        reader.readAsText(fileList[0]);
    }

    return (
        <div>
            <div className="mdb-convert--header">
                <span className="mdb-convert--button">上傳mdb檔</span>
                <input type="file" id="fileinput" onChange={handleUploadMDB} />
                <span className="mdb-convert--button">上傳txt檔</span>
                <input type="file" id="fileinput" onChange={handleUploadTxt} />
            </div>
            <div className="mdb-convert--content">
                <table className="mdb-convert--table">
                    <thead>
                        <tr>
                            {columnNames.map((ele) => (
                                <th key={ele.ID}>{ele}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {mdbData.map((ele) => (
                            <tr key={`No.${ele.ID}`}>
                                <td>{ele.ID}</td>
                                <td>{ele.CNCNr}</td>
                                <td>{ele.Baureihe}</td>
                                <td>{ele.Fehlercode}</td>
                                <td>{ele.Start.toISOString()}</td>
                                <td>{ele.Ende.toISOString()}</td>
                                <td>{ele.DauerReal.toISOString()}</td>
                                <td>{ele.Dateiname}</td>
                                <td>{ele.Material}</td>
                                <td>{ele.Blank}</td>
                                <td>{ele.Höhe}</td>
                                <td>
                                    {/* {ele.DauerCalc != 0 ? ele.DauerCalc.toISOString() : ""} */}
                                </td>
                                <td>{ele.LastKalib.toISOString()}</td>
                                <td>{ele.LastWWKalib.toISOString()}</td>
                                <td>{ele.ToolsLens}</td>
                                <td>{ele.Version}</td>
                                <td>{ele.SGNr}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MDBConvert;
