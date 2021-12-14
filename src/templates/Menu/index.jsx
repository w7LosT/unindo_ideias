import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import P from 'prop-types';
import './Menu.css';

export const Menu = ({ components }) => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/abc">ABC</Link>
        <Link to="/abc/slug">ABC</Link>
      </nav>
      <Routes>
        <Route path="/abc/:slug/*" element={components.abc} />
        <Route path="/abc" element={components.abc} />
        <Route path="/" element={components.home} exact />
        <Route path="*" element={components.page404} />
      </Routes>
    </BrowserRouter>
  );
}

Menu.propTypes = {
  components: P.object.isRequired,
};
