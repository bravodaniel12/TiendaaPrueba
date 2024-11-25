import React, { useState } from 'react';

// Definir categorías y subcategorías
const categories = {
    Hombres: {
        Camisas: ["Manga Corta", "Manga Larga", "Estampadas", "Lisas"],
        Camisetas: ["Manga Corta", "Manga Larga", "Oversize", "Con Estampado"],
        Pantalones: ["Jeans", "Drill", "Slim Fit", "Regular Fit", "Skinny", "Joggers", "Casual", "Deportivo"],
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

const FilterMenu = ({ filters, onFilterChange }) => {
    const handleGenderChange = (event) => {
        onFilterChange("genero", event.target.value);
    };

    const handleTypeChange = (event) => {
        onFilterChange("tipo", event.target.value);
    };

    const handleSubTypeChange = (event) => {
        onFilterChange("subTipo", event.target.value);
    };

    const types = filters.genero ? Object.keys(categories[filters.genero] || {}) : [];
    const subTypes = filters.tipo ? categories[filters.genero][filters.tipo] : [];

    return (
        <div className="flex flex-wrap gap-4 p-4 bg-gray-100 rounded-lg shadow-md opacity-90">
            {/* Filtro de Género */}
            <div className="flex-1">
                <select
                    onChange={handleGenderChange}
                    value={filters.genero}
                    className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Seleccionar Género</option>
                    {Object.keys(categories).map((gender) => (
                        <option key={gender} value={gender}>
                            {gender}
                        </option>
                    ))}
                </select>
            </div>

            {/* Filtro de Tipo */}
            <div className="flex-1">
                <select
                    onChange={handleTypeChange}
                    value={filters.tipo}
                    disabled={!filters.genero}
                    className={`w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${!filters.genero ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <option value="">Seleccionar Tipo</option>
                    {types.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {/* Filtro de Subtipo */}
            <div className="flex-1">
                <select
                    onChange={handleSubTypeChange}
                    value={filters.subTipo}
                    disabled={!filters.tipo}
                    className={`w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${!filters.tipo ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <option value="">Seleccionar Subtipo</option>
                    {subTypes.map((subType) => (
                        <option key={subType} value={subType}>
                            {subType}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    );
};

export default FilterMenu;

