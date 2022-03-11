import React, { FC, useState, useRef, useEffect, useCallback } from 'react';
// ======= Styles ======
import cl from './Pagination.module.scss'
import cn from 'classnames';
// ======= Components ======
import SvgIcon from '../SvgIcon/SvgIcon'
import LongArrowBtn from '../LongArrowBtn/LongArrowBtn';
import Ellipsis from '../Ellipsis/Ellipsis';

type Props = {
	currentPage: number,
	numberOfPages: number
	setPage: React.Dispatch<React.SetStateAction<number>>
}

// maximum pagination buttons should be 10
// I create a space by adding 3 to 9
const space = 3
let maxCountBtnOfPagination = 9

const spaceForPagination = maxCountBtnOfPagination + space

const Pagination: FC<Props> = ({ currentPage, numberOfPages, setPage }) => {

	const [pages, setPages] = useState<number[]>([])

	// ======= Generates array ======
	const generateArrayOfPages = (maxCountBtnOfPagination?: number) => {
		const arr: number[] = []

		if (numberOfPages > spaceForPagination) {
			for (let indx = 0;
				indx < numberOfPages &&
				indx !== maxCountBtnOfPagination;
				indx++) {
				arr.push(indx + 1)
			}
		} else {
			for (let indx = 0; indx < numberOfPages; indx++) {
				arr.push(indx + 1)
			}
		}
		return arr
	}

	const generateArrayOfPagesFromTheEnd = () => {
		const arr: number[] = []

		for (let indx = numberOfPages; arr.length !== maxCountBtnOfPagination; indx--) {
			arr.unshift(indx)
		}

		setPages(arr)
	}

	// ======= Delete ======
	const deleteFirstPaginationBtn = () => {
		setPages(pages => pages.slice(1))
	}

	const deleteEndPaginationBtn = () => {
		setPages(pages => {
			const arr = [...pages]
			arr.splice(-1, 1)
			return arr
		})
	}

	// ======= Adding ======
	const addStartPaginationBtn = () => {
		setPages(pages => {
			const arr = [...pages]
			arr.unshift(pages[0] - 1)

			return arr
		})
	}

	const addCurrentPageBtn = () => {
		setPages(pages => [...pages, currentPage + 1])
	}

	// ======= handles ======
	const handleNextPage = () => {
		setPage(prev => prev === numberOfPages ? prev : prev + 1)

		if ( currentPage >= maxCountBtnOfPagination && 
				 pages[pages.length - 1] !== numberOfPages ) {
			deleteFirstPaginationBtn()
			addCurrentPageBtn()
		}

	}

	const handlePrevPage = () => {
		setPage(prev => prev === 1 ? prev : prev - 1)

		if (pages[pages.length - 1] > maxCountBtnOfPagination) {
			deleteEndPaginationBtn()
		}

		if (currentPage > 1 && pages[pages.length - 1] > maxCountBtnOfPagination) {
			addStartPaginationBtn()
		}
	}

	const handleLastPage = () => {
		setPage(numberOfPages)
		generateArrayOfPagesFromTheEnd()
	}

	const isShowEllipsis = (): boolean => {
		return numberOfPages > spaceForPagination &&
					 pages[pages.length - 1] < numberOfPages &&
					 pages[pages.length - space] !== numberOfPages - space
	}

	const isShowLastPageBtn = (): boolean => {
		return currentPage !== numberOfPages &&
					 numberOfPages > maxCountBtnOfPagination &&
					 pages[pages.length - 1] !== numberOfPages 
	}
	// Effects

	useEffect(() => {
		setPages(generateArrayOfPages(maxCountBtnOfPagination))
		setPage(1)
	}, [numberOfPages])

	useEffect(() => {
			if (window.innerWidth <= 960 && pages.length !== 3) {
				maxCountBtnOfPagination = 3
				setPages(generateArrayOfPages(maxCountBtnOfPagination))
			}

			window.onresize = () => {
				if (window.innerWidth <= 960) {
					maxCountBtnOfPagination = 3
					setPages(generateArrayOfPages(maxCountBtnOfPagination))
				}
				if (window.innerWidth > 960) {
					maxCountBtnOfPagination = 9
					setPages(generateArrayOfPages(maxCountBtnOfPagination))
				}
			}
	
	}, [])


	return (
		<div className={cl.pagination} >

			{/* ==== Prev btn ==== */}
			<LongArrowBtn handleBtn={handlePrevPage} />

			<div className={cl.numbers}>

				{
					pages[0] > 1 &&
					<Ellipsis/>
				}

				{/* // numbers pagination */}
				{
					pages.map(page => (
						<button key={`Carlist-page-${page}`}
							onClick={() => setPage(page)}
							className={
								currentPage === page
									?
									cn(cl.pagination__btn, cl.pagination__btn_active)
									:
									cl.pagination__btn
							}
						>
							{page}
						</button>
					))
				}
				{/* // numbers pagination */}

				{
					isShowEllipsis() &&
					<Ellipsis/>
				}

				{/* === Last btn page === */}
				{
					isShowLastPageBtn() &&

					<button className={
						currentPage === numberOfPages
							?
							cn(cl.pagination__btn, cl.pagination__btn_active)
							:
							cl.pagination__btn
					}
						onClick={handleLastPage}
					>
						{numberOfPages}
					</button>
				}

			</div>

			{/* ==== Next btn ==== */}

			<LongArrowBtn handleBtn={handleNextPage} isRotate180deg={true}  />

		</div>
	);
};

export default Pagination;