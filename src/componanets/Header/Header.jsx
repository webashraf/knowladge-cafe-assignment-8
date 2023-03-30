import React from 'react';

const Header = () => {
          return (
                    <>
                            <div className='flex justify-between'>
                    <h2 className="logo">Programming Art</h2>
                    <div className="header-menu">
                              <ul className='flex gap-5'>
                                        <li>Home</li>
                                        <li>Blog</li>
                                        <li>Login</li>
                                        <li>USER IMAGE</li>
                              </ul>
                    </div>

                            </div>
                            <hr />
                    </>
          );
};

export default Header;