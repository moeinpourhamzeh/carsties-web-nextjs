'use client'
import React, {useEffect, useState} from 'react'
import AuctionCard from "@/app/auctions/AuctionCard";
import AppPagination from "@/app/components/AppPagination";
import {Auction} from "@/types";
import {getData} from "@/app/actions/auctionActions";



export default function Listings () {
    const [auctions, setAuctions] = useState<Auction[]>([])
    const [pageCount, setPageCount] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        getData(pageNumber).then(data => {
            setAuctions(data.results)
            setPageCount(data.pageCount)
        })
    }, [pageNumber])

    if (auctions.length === 0) {
        <h3>...</h3>
    }

  return (
      <>
        <div className='grid grid-cols-4 gap-6'>
              {auctions && auctions.map((acution: any) => (
                  <AuctionCard auction={acution} key={acution.id} />
              ))}
          </div>
          <div className="flex justify-center mt-4">
              <AppPagination pageChanged={setPageNumber} currentPage={pageNumber} pageCount={pageCount} />
          </div>
      </>
  )
}

