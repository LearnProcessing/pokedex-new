import React from 'react'

export const type = {
    fire: {
        outer: 'bg-yellow-500',
        inner: 'bg-yellow-300',
        border: 'border-yellow-500',
        borderThin: 'border-yellow-300'
    },
    water: {
        outer: 'bg-blue-400',
        inner: 'bg-blue-200',
        border: 'border-blue-500',
        borderThin: 'border-blue-200'
    },
    grass: {
        outer: 'bg-green-400',
        inner: 'bg-green-200',
        border: 'border-green-400',
        borderThin: 'border-green-200'
    },
    electric: {
        outer: 'bg-yellow-300',
        inner: 'bg-yellow-100',
        border: 'border-yellow-300',
        borderThin: 'border-yellow-100'
    },
    psychic: {
        outer: 'bg-pink-500',
        inner: 'bg-pink-300',
        border: 'border-pink-500',
        borderThin: 'border-pink-300'
    },
    ice: {
        outer: 'bg-green-200',
        inner: 'bg-green-50',
        border: 'border-green-200',
        borderThin: 'border-green-50'
    }, 
    dragon: {
        outer: 'bg-purple-700',
        inner: 'bg-purple-500',
        border: 'border-purple-700',
        borderThin: 'border-purple-500'
    },
    dark: {
        outer: 'bg-yellow-800',
        inner: 'bg-yellow-600',
        border: 'border-yellow-800',
        borderThin: 'border-yellow-600'
    },
    fairy: {
        outer: 'bg-red-300',
        inner: 'bg-red-100',
        border: 'border-red-300',
        borderThin: 'border-red-100'
    },
    normal: {
        outer: 'bg-yellow-200',
        inner: 'bg-yellow-50',
        border: 'border-yellow-200',
        borderThin: 'border-yellow-50'
    },
    fighting: {
        outer: 'bg-red-600',
        inner: 'bg-red-300',
        border: 'border-red-600',
        borderThin: 'border-red-300'
    },
    flying: {
        outer: 'bg-purple-300',
        inner: 'bg-purple-100',
        border: 'border-purple-300',
        borderThin: 'border-purple-100'
    }, 
    poison: {
        outer: 'bg-indigo-600',
        inner: 'bg-indigo-400',
        border: 'border-indigo-600',
        borderThin: 'border-indigo-400'
    }, 
    ground: {
        outer: 'bg-yellow-200',
        inner: 'bg-yellow-100',
        border: 'border-yellow-200',
        borderThin: 'border-yellow-100'
    },
    rock: {
        outer: 'bg-gray-500',
        inner: 'bg-gray-300',
        border: 'border-gray-500',
        borderThin: 'border-gray-300'
    },
    bug: {
        outer: 'bg-green-600',
        inner: 'bg-green-400',
        border: 'border-green-600',
        borderThin: 'border-green-400'
    },
    ghost: {
        outer: 'bg-indigo-700',
        inner: 'bg-indigo-400',
        border: 'border-indigo-700',
        borderThin: 'border-indigo-400'
    }, 
    steel: {
        outer: 'bg-gray-400',
        inner: 'bg-gray-200',
        border: 'border-gray-400',
        borderThin: 'border-gray-200'
    },
    unknown: {
        outer: 'bg-indigo-300',
        inner: 'bg-indigo-100',
        border: 'border-indigo-300',
        borderThin: 'border-indigo-100'
        
    },
    shadow: {
        outer: 'bg-gray-900',
        inner: 'bg-gray-400',
        border: 'border-gray-900',
        borderThin: 'border-gray-400'
    }
}
const TypeContext = React.createContext(type.water)
export const TypeProvider = TypeContext.Provider
export default TypeContext