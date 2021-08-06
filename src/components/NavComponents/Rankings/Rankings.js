import React from 'react';
import Input from '../../UI/Input/Input';

const Ranking = () => {
    const selectOptions = [
        { display: 'Reset', value: 'ResetCount' },
        { display: 'Master Reset', value: 'MasterResetCount' },
        { display: 'BK', value: 'bk' },
        { display: 'SM', value: 'sm' },
        { display: 'ELF', value: 'elf' },
        { display: 'MG', value: 'mg' },
        { display: 'DL', value: 'dl' },
        { display: 'Guild', value: 'guild' },
    ];

    return (
        <React.Fragment>
            <label>Selecione um tipo de Ranking</label>
            <Input
                inputType="select"
                changeInputHandler={() => {}}
                selectOptions={selectOptions}
            />
        </React.Fragment>
    );
};

export default Ranking;
