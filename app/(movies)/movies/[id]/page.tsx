import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVidios from '../../../../components/movie-vidios';

export default async function MovieDetail({
  params: { id },
}: {
  params: { id:string };
}) {
  return <div>
    <h3>Movie detail page</h3>
    <Suspense fallback={<h1>Loading movie info</h1>}>
      <MovieInfo id={id}/>
    </Suspense>
    <h4>Videos</h4>
    <Suspense fallback={<h1>Loading movie videos</h1>}>
      <MovieVidios id={id}/>
    </Suspense>
  </div>
}