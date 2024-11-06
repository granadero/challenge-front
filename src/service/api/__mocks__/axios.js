const mockAxios = jest.genMockFromModule("axios");

// Añadir configuraciones necesarias para axiosInstance
mockAxios.create = jest.fn(() => mockAxios);

module.exports = mockAxios;
