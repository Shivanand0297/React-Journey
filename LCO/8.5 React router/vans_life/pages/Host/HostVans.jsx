import React from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

import Skeleton from '@mui/material/Skeleton';


export async function loader({ request }) {
    await requireAuth(request)
    return defer({ vans: getHostVans() })
}

export default function HostVans() {
    const dataPromise = useLoaderData()

    function renderVanElements(vans) {
        const hostVansEls = vans.map(van => (
            <Link
                to={van.id}
                key={van.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={van.id}>
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        ))
        return (
            <div className="host-vans-list">
                <section>
                    {hostVansEls}
                </section>
            </div>
        )
    }


    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <React.Suspense fallback={
                <div style={{padding: "0px 26px", display: "flex", flexDirection: "column", gap: "15px"}}>
                    <Skeleton variant="rectangular" width="100%" height="107px" animation="wave" sx={{bgcolor: "#ccc5bd"}} />
                    <Skeleton variant="rectangular" width="100%" height="107px" animation="wave" sx={{bgcolor: "#ccc5bd"}} />
                    <Skeleton variant="rectangular" width="100%" height="107px" animation="wave" sx={{bgcolor: "#ccc5bd"}} />
                </div>
            }>
                <Await resolve={dataPromise.vans}>
                    {renderVanElements}
                </Await>
            </React.Suspense>
        </section>
    )
}