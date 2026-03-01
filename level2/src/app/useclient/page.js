"use client";
import React, { useState } from 'react'

export default function page() {
    const [first, setfirst] = useState('How Can I Use Client Component in Next 13?');
    return (
        <div>{first}</div>
    )
}
