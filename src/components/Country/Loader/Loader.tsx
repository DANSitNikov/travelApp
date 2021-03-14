import React from "react"
import ContentLoader from "react-content-loader"

function Loader() {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={'81vw'}
                height={'47vw'}
                viewBox="0 0 500 364"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="15" y="4" rx="0" ry="0" width="519" height="37" />
                <rect x="132" y="56" rx="0" ry="0" width="260" height="133" />
                <rect x="10" y="231" rx="0" ry="0" width="87" height="57" />
                <rect x="117" y="216" rx="0" ry="0" width="324" height="40" />
                <rect x="50" y="276" rx="0" ry="0" width="0" height="13" />
            </ContentLoader>
        </div>
    );
}

export default Loader;
