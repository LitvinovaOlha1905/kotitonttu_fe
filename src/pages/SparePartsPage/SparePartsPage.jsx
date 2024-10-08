import React from 'react';
import styles from './SparePartsPage.module.css';
import SparePartsForm from '../../components/SpareParts/SparePartsForm/SparePartsForm';
import SparePartsTable from '../../components/SpareParts/SparePartsTable/SparePartsTable';

export default function SparePartsPage() {
	return (
		<div className='container'>
			<SparePartsForm />

			<h2 className={styles.title}>Список запчастей по серии</h2>
			<SparePartsTable />
		</div>
	);
}
