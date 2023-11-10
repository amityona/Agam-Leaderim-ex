import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {

    Change: (argu: string) => void;
}

const natArray = ["ALL", "AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IN", "IR", "MX",
    "NL", "NO", "NZ", "RS", "TR", "UA", "US"];

export default function Header({ Change }: Props) {
    const [nationality, setNationality] = React.useState<string>("ALL");

    const handleChange = (event: SelectChangeEvent) => {
        setNationality(event.target.value);
    };

    const handleClick = () => {
        Change(nationality);
    };
    return (
        <div className="bg-bg-2 mr-20 m-14 p-10  shadow-md rounded-lg flex items-center justify-end gap-10 ">
            <div>
                <InputLabel id="demo-simple-select-label" style={{ color: "white" }}>Nationality</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={nationality}
                    label="Nationality"
                    onChange={handleChange}
                    style={{ color: "black", backgroundColor: "white", width: "100px" }}
                >
                    {
                        natArray.map(element => {
                            return <MenuItem value={element}>{element}</MenuItem>
                        })
                    }

                </Select>
            </div>
            <input type='button' className='bg-button p-5 max-w-min text-white rounded-xl cursor-pointer mt-5' value={"Filter"} onClick={() => { handleClick() }} />


        </div >
    );
}
