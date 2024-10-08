import React, { useState } from 'react';
import styles from './SparePartsForm.module.css';
import SparePartsSeriesSelector from '../SparePartsSeriesSelector/SparePartsSeriesSelector';
// import { useDispatch } from 'react-redux';

export default function SparePartsForm() {
	// const [points, setPoints] = useState('');
	// const [type, setType] = useState('');
	// const [subtype, setSubtype] = useState('');
	const [selectedSeries, setSelectedSeries] = useState('');
	// const dispatch = useDispatch();

	// Пример списка серий
	const seriesList = ['Серия 1', 'Серия 2', 'Серия 3'];

	// const handleSubmit = event => {
	// 	event.preventDefault();
	// 	dispatch(addBarcodeType({ points, spareName, photo, series }));

	// 	// Очищаем форму
	// 	setPoints('');
	// 	setType('');
	// 	setSubtype('');

	// 	// Обновляем страницу
	// 	window.location.reload();
	// };

	// onSubmit={handleSubmit} - поставь то потом в form

	return (
		<form className={styles.form_block}>
			<label htmlFor='articleNumber'>Артикул:</label>
			<input
				type='number'
				id='articleNumber'
				// value={articleNumber}
				// onChange={e => setPoints(e.target.value)}
				required
			/>
			<label htmlFor='spareName'>Название:</label>
			<input
				type='text'
				id='spareName'
				// value={spareName}
				// onChange={e => setType(e.target.value)}
				required
			/>
			<label htmlFor='photo'>Фотография:</label>
			<input
				type='text'
				id='photo'
				// value={photo}
				// onChange={e => setSubtype(e.target.value)}
				required
			/>
			<SparePartsSeriesSelector
				seriesList={seriesList}
				selectedSeries={selectedSeries}
				setSelectedSeries={setSelectedSeries}
			/>
			<button className={styles.form_btn} type='submit'>
				Добавить Запчасть
			</button>
		</form>
	);
}
