import React, { useState } from 'react';

// Definir categorías y subcategorías
const categories = {
    Hombres: {
        Camisas: ["Manga Corta", "Manga Larga", "Estampadas", "Lisas"],
        Camisetas: ["Manga Corta", "Manga Larga", "Oversize", "Con Estampado"],
        Pantalones: ["Jeans", "Slim Fit", "Regular Fit", "Skinny", "Joggers", "Casual", "Deportivo"],
        Chaquetas: ["Sin Capota", "Con Capota", "Blazers", "Gabanes"],
        Buzos: ["Básicos", "Estampados", "Cremallera", "Con Capucha"],


    },
    Mujeres: {
        Blusas: ["Manga Corta", "Manga Larga", "Con Estampado", "Básicas", "Elegantes"],
        Vestidos: ["Casuales", "De Noche", "De Oficina", "Con Estampados", "Largos"],
        Faldas: ["Cortas", "Largas", "Con Estampado", "De Cintura Alta"],
        Chaquetas: ["Sin Capota", "Con Capota", "Blazers", "Gabanes", "Cuero",],
        Vaqueros: ["Skinny", "Mom Fit", "Bootcut", "De Cintura Alta",]

    },
};

function FilterMenu({ onFilterChange }) {
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedSubType, setSelectedSubType] = useState('');

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
        onFilterChange(e.target.value, selectedType, selectedSubType);
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        onFilterChange(selectedGender, e.target.value, selectedSubType);
    };

    const handleSubTypeChange = (e) => {
        setSelectedSubType(e.target.value);
        onFilterChange(selectedGender, selectedType, e.target.value);
    };

    return (
        <div className="filter-menu">
            <select onChange={handleGenderChange} value={selectedGender}>
                <option value="">Seleccionar Género</option>
                {Object.keys(categories).map(gender => (
                    <option key={gender} value={gender}>{gender}</option>
                ))}
            </select>

            {selectedGender && (
                <select onChange={handleTypeChange} value={selectedType}>
                    <option value="">Seleccionar Tipo</option>
                    {Object.keys(categories[selectedGender]).map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            )}

            {selectedType && selectedGender && (
                <select onChange={handleSubTypeChange} value={selectedSubType}>
                    <option value="">Seleccionar Subtipo</option>
                    {categories[selectedGender][selectedType].map(subType => (
                        <option key={subType} value={subType}>{subType}</option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default FilterMenu;
