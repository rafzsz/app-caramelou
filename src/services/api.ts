import * as React from 'react';

import axios from 'axios';
import { create } from 'apisauce'

const api = create({
    baseURL: 'http://localhost:3000',
});

export default api;