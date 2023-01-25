import React, { useState, useEffect } from "react";

export const BankAccountItem = (props) => {

    return (
        
            <option onChange={props.setSelectedBankAccount(props.BankAccountItem)} onClick={console.log(props.bankAccountItem)} value={props.bankAccountItem.id}>Cuenta {props.bankAccountItem.account_number} del banco {props.bankAccountItem.bank}</option>
       
    )
}